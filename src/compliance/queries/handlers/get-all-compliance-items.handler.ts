import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllComplianceItemsQuery } from '../get-all-compliance-items.query';

@QueryHandler(GetAllComplianceItemsQuery)
export class GetAllComplianceItemsHandler
  implements IQueryHandler<GetAllComplianceItemsQuery>
{
  async execute(query: GetAllComplianceItemsQuery): Promise<any> {
    return [
      { id: '1', name: 'Compliance Item 1', description: 'Description 1' },
      { id: '2', name: 'Compliance Item 2', description: 'Description 2' },
    ];
  }
}
