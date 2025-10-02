export class CreateRiskCommand {
  constructor(
    public readonly name: string,
    public readonly description: string,
  ) {}
}
