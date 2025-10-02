export class ComplianceItemCreatedEvent {
  constructor(
    public readonly complianceItemId: string,
    public readonly name: string,
    public readonly description: string,
  ) {}
}
