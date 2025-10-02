export class RiskCreatedEvent {
  constructor(
    public readonly riskId: string,
    public readonly name: string,
    public readonly description: string,
  ) {}
}
