export class CreateComplianceItemCommand {
  constructor(
    public readonly name: string,
    public readonly description: string,
  ) {}
}
