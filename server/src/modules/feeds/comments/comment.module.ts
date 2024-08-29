import { Module } from '@nestjs/common';
import { FeedCommentRepository } from './feed.comment.repository';
import { FeedCommentService } from './feed.comment.service';

@Module({
  imports: [],
  providers: [FeedCommentService, FeedCommentRepository],
  exports: [FeedCommentService],
})
export class CommentModule {}
