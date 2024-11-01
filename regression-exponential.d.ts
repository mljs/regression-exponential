import { BaseRegression } from 'ml-regression-base';

export interface ExponentialRegressionModel {
  name: 'exponentialRegression';
  A: number;
  B: number;
}
export declare class ExponentialRegression extends BaseRegression {
  /**
   * The coefficient `A` in the equation `y = A * e^(B * x)`.
   */
  A: number;

  /**
   * The exponent coefficient `B` in the equation `y = A * e^(B * x)`.
   */
  B: number;

  constructor(x: number[], y: number[]);

  static load(model: ExponentialRegressionModel): ExponentialRegression;

  toJSON(): ExponentialRegressionModel;
}
