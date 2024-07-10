import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "@modules/users/schema/user.schema";
import {ConnectionNames} from "@database/database.config";
import { FilterQuery, Model, UpdateQuery, UpdateWriteOpResult } from 'mongoose';
import {Projection} from "@lib/type/projection.type";



@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name, ConnectionNames.GO_FOODIE)
    private readonly userModel: Model<UserDocument>
  ) {}

  async find(filter: UserDocument, projection?: Projection<UserDocument>): Promise<UserDocument[]> {
    return this.userModel.find(filter, projection).lean();
  }

  async findOne(filter: FilterQuery<UserDocument>, projection?: Projection<UserDocument>): Promise<UserDocument> {
    return this.userModel.findOne(filter, projection).lean();
  }

  async updateOne(filter: FilterQuery<UserDocument>, $set: UpdateQuery<UserDocument>): Promise<UpdateWriteOpResult> {
    return this.userModel.updateOne(filter, { $set }).exec();
  }

  async updateMany(filter: FilterQuery<UserDocument>, $set: UpdateQuery<UserDocument>): Promise<UpdateWriteOpResult> {
    return this.userModel.updateOne(filter, { $set }).exec();
  }
}