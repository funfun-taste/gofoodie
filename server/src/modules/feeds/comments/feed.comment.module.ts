import { Module } from '@nestjs/common';
import { FeedCommentRepository } from './feed.comment.repository';
import { FeedCommentService } from './feed.comment.service';
import { FeedCommentFeature } from '@modules/feeds/comments/schema/feed.comment.schema';

@Module({
  imports: [FeedCommentFeature],
  providers: [FeedCommentService, FeedCommentRepository],
  exports: [FeedCommentService],
})
export class FeedCommentModule {}
