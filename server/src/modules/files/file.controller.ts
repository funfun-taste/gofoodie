import { JwtAuthGuard } from '@modules/auth/guards/jwt.guard';
import {
  Controller,
  Param,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileSerivce } from './files.service';
import { diskStorage } from 'multer';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import * as fs from 'node:fs';

@UseGuards(JwtAuthGuard)
@Controller('files')
export class FileController {
  private readonly filesPath: string;

  constructor(private readonly fileService: FileSerivce) {
    this.filesPath = path.join(__dirname, 'uploads/');
    if (!fs.existsSync(this.filesPath)) {
      fs.mkdirSync(this.filesPath);
    }
  }

  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: path.join(__dirname, 'uploads/'),
        filename: (req, file, cb) => {
          const originalNameBuffer = Buffer.from(file.originalname, 'binary');
          file.originalname = originalNameBuffer.toString('utf-8');
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}_${file.originalname}`);
        },
      }),
    }),
  )
  @Post('/feed/upload/:postId')
  async feedImageUpload(
    @Param('postId') postId: string,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log(postId, files);
  }
}
