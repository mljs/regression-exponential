import ExponentialRegression from '..';

describe('Exponential regression', () => {
  it('basic test', () => {
    const x = [0, 1, 2, 3, 4];
    const y = [1.5, 2.5, 3.5, 5.0, 7.5];
    const result = new ExponentialRegression(x, y);
    expect(result.A).toBeCloseTo(0.3912023, 10e-7);
    expect(result.B).toBeCloseTo(1.57991, 10e-7);

    const score = result.score(x, y);
    expect(score.r2).toBeGreaterThan(0.8);
    expect(score.chi2).toBeLessThan(0.1);
    expect(score.rmsd).toBeCloseTo(0.1);
    expect(result.toString(4)).toBe('f(x) = 1.580 * e^(0.3912 * x)');
    expect(result.toLaTeX(4)).toBe('f(x) = 1.580e^{0.3912x}');
  });

  it('toJSON / load model', () => {
    const regression = ExponentialRegression.load({
      name: 'exponentialRegression',
      A: -1,
      B: 1,
    });

    expect(regression.predict(1)).toBeCloseTo(
      0.36787944117144233,
      Number.EPSILON,
    );

    const model = regression.toJSON();
    expect(model).toStrictEqual({
      name: 'exponentialRegression',
      A: -1,
      B: 1,
    });
  });
});
