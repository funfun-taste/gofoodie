import { ObjectId } from 'mongodb';
import { BadRequestException } from '@nestjs/common';

/**
 * @description string id를 ObjectId로 변환
 * @param {string} id
 */
export const stringToObjectId = (id: string): ObjectId => {
  if (typeof id !== 'string') {
    throw new BadRequestException('id는 문자열이어야 합니다.');
  }

  try {
    return new ObjectId(id);
  } catch (e) {
    throw new BadRequestException('id 형식을 확인해 주세요.');
  }
};

/**
 * @description ObjectId를 string으로 변환
 * @param {ObjectId} _id
 */
export const objectIdToString = (_id: ObjectId): string => {
  if (!(_id instanceof ObjectId)) {
    throw new BadRequestException('유효한 ObjectId가 아닙니다.');
  }

  try {
    return _id.toHexString();
  } catch (e) {
    throw new BadRequestException('id 형식을 확인해 주세요.');
  }
};
