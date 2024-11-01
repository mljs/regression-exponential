import { BaseRegression } from 'ml-regression-base';

export interface ExponentialRegressionModel {
  name: 'exponentialRegression';
  A: number;
  B: number;
}
export declare class ExponentialRegression extends BaseRegression {
  A: number;
  B: number;

  constructor(x: number[], y: number[]);

  static load(model: ExponentialRegressionModel): ExponentialRegression;

  toJSON(): ExponentialRegressionModel;
}
