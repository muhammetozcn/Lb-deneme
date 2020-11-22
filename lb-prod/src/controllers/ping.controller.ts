import {inject} from '@loopback/core';
import { isFilter, juggler } from '@loopback/repository';
import {get, post, Request, ResponseObject, RestBindings} from '@loopback/rest';
import { PldbDataSource } from '../datasources';

/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE: ResponseObject = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'PingResponse',
        properties: {
          greeting: {type: 'string'},
          date: {type: 'string'},
          url: {type: 'string'},
          headers: {
            type: 'object',
            properties: {
              'Content-Type': {type: 'string'},
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};

/**
 * A simple controller to bounce back http requests
 */
export class PingController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  // Map to `GET /ping`

  @get('/panda', {
    responses: {
      '200': {
        description: 'Panda HTTP GET URL',
      },
    },
  })
 
  /*  @post('/todo', {
    responses: {
      '200': {
        description: 'Veriniz post edildi',
        content: 'application/json',
      },
    },
  })*/
  panda(): object {
    let conn=new PldbDataSource();

  
    return {
      data:PldbDataSource.dataSourceName,
      dataService:conn.connected,
      merhaba: 'ali->object çalıştı',
      date: new Date(),
      url: this.req.url,
      headers: Object.assign({}, this.req.headers),
    };
  }
/*
  ping(): object {
    // Reply with a greeting, the current time, the url, and request headers
  
    return {
      greeting: 'Hello from LoopBack',
      date: new Date(),
      url: this.req.url,
      headers: Object.assign({}, this.req.headers),
    };
  }*/
}
