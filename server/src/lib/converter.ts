import {ObjectId} from "mongodb";
import {BadRequestException} from "@nestjs/common";

export const stringToObjectId = async (id: string): Promise<ObjectId> => {
  try {
    return new ObjectId(id);
  } catch (e) {
    throw new BadRequestException('id 형식을 확인해 주세요.')
  }
}

export const objectIdToString = async (_id: ObjectId): Promise<string> => {
  try {
    return String(_id);
  } catch (e) {
    throw new BadRequestException('id 형식을 확인해 주세요.')
  }
}