import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllRisksQuery } from '../get-all-risks.query';

@QueryHandler(GetAllRisksQuery)
export class GetAllRisksHandler implements IQueryHandler<GetAllRisksQuery> {
  async execute(query: GetAllRisksQuery): Promise<any> {
    return [
      { id: '1', name: 'Risk 1', description: 'Description 1' },
      { id: '2', name: 'Risk 2', description: 'Description 2' },
    ];
  }
}
