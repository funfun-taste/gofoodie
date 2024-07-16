import {Prop, Schema} from "@nestjs/mongoose";
import {COLLECTIONS} from "@database/database.config";

@Schema({collection: COLLECTIONS.FILES_FEED_THUMBNAIL, versionKey: false})
export class FilesFeedThumbnail {
  @Prop({ type: String })
  originName: string;

  @Prop({ type: String })
  name: string;

  @Prop({ type: Number })
  size: number;

  @Prop({ type: String })
  path1: string;

  @Prop({ type: String })
  path2: string;

  @Prop({ type: String })
  type: string;

  @Prop({ type: String })
  fileType: string;

  @Prop({ type: Date, default: new Date(), required: false })
  createdDate: Date;

  @Prop({ type: String })
  feedId: string;
}