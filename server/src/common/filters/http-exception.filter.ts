import { Request, Response } from 'express';
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Inject,
  Logger,
} from '@nestjs/common';

/**
 * HttpException Catch: NestJS에서는 예외 처리를 위해 Exception Filter를 사용한다.
 */
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  constructor(
  ) {}

  async catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    let status = 500;
    let errorMessage = exception.message;

    // 에러 시간
    const requestId = Date.now().toString();

    try {
      if (exception) {
        status = exception?.getStatus ? exception?.getStatus() : 400;
        /** @description class validator를 통해 message가 string[]인 경우가 있어서 아래와 같이 예외 처리  */
        const exceptionResponse = exception?.getResponse();
        if (typeof exceptionResponse === 'object') {
          if (exceptionResponse['message']) {
            errorMessage =
              typeof exceptionResponse['message'] === 'string'
                ? exceptionResponse['message']
                : exceptionResponse['message'].join('\r\n');
          }
        }
      }
    } catch (e) {}

    const { ip, method, originalUrl, user, body } = req;
    const userAgent = req.get('user-agent') || '';

    // const loggerData: CreateLoggerDto = {
    //   logId: requestId,
    //   ip: ip,
    //   agent: userAgent,
    //   method: method,
    //   status: 'error',
    //   statusCode: status,
    //   message: errorMessage,
    //   path: originalUrl,
    //   createdDate: new Date(),
    //   user,
    //   body,
    //   data: '',
    // };
    // if (!originalUrl.includes('server-events'))
    //   await this.loggerService.createdLogs(loggerData);

    this.logger.error(exception);

    res.status(status).json({
      statusCode: status,
      message: errorMessage,
      path: originalUrl,
      timestamp: new Date().toISOString(),
    });
  }
}
