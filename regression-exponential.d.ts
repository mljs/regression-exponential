import { BaseRegression } from 'ml-regression-base';

export interface ExponentialRegressionModel {
  name: 'exponentialRegression';
  A: number;
  B: number;
}
export declare class ExponentialRegression extends BaseRegression {
  /**
   * The exponent coefficient `A` in the equation `y = B * e^(A * x)`.
   */
  A: number;

  /**
   * The coefficient `B` in the equation `y = B * e^(A * x)`.
   */
  B: number;

  constructor(x: number[], y: number[]);

  static load(model: ExponentialRegressionModel): ExponentialRegression;

  toJSON(): ExponentialRegressionModel;
}
