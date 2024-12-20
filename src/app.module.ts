import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JirasModule } from './jiras/jiras.module';

@Module({
  imports: [JirasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
