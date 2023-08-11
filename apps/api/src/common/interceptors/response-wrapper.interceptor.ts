import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Observable, map } from 'rxjs'

@Injectable()
export class ResponseWrapperInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => ({
        status: data?.status ? data.status : 'success',
        ...(data?.results
          ? { results: data.results }
          : Array.isArray(data)
          ? { results: data.length }
          : { results: 1 }),
        ...(data?.accessToken ? { accessToken: data.accessToken } : {}),
        ...(data?.refreshToken ? { refreshToken: data.accessToken } : {}),
        message: data?.message ? data.message : 'Request Successful',
        data: data?.data ? data.data : data,
      })),
    )
  }
}
