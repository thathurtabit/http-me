import { getStatusCodeInfo } from "./getStatusCodeInfo";

describe('getStatusCodeInfo', () => { 
  it('should return undefined if inputValue is empty', () => {
    const result = getStatusCodeInfo('-');
    expect(result).toBeUndefined();
  });
  it(`should return undefined if inputValue is not a number and not found ('abc')`, () => {
    const result = getStatusCodeInfo('abc');
    expect(result).toBeUndefined();
  });
  it(`should return undefined if inputValue is a number but not in the list ('999')`, () => {
    const result = getStatusCodeInfo('999');
    expect(result).toBeUndefined();
  });
  it(`should return the correct object if inputValue is a number in the list ('200')`, () => {
    const result = getStatusCodeInfo('200');
    expect(result).toEqual(expect.objectContaining({
      statusCode: 200,
      title: 'OK',
    }));
  });
  it(`should return the correct object if inputValue is a string in the list ('OK')`, () => {
    const result = getStatusCodeInfo('OK');
    expect(result).toEqual(expect.objectContaining({
      statusCode: 200,
      title: 'OK',
    }));
  });

  it('should return the correct object if inputValue is a number in the list ("302")', () => {
    const result = getStatusCodeInfo("302");
    expect(result).toEqual(expect.objectContaining({
      statusCode: 302,
      title: 'Found',
    }));
  });

  it(`should return the correct object if inputValue is a string in the list ('Moved Permanently')`, () => {
    const result = getStatusCodeInfo('Moved Permanently');
    expect(result).toEqual(expect.objectContaining({
      statusCode: 301,
      title: 'Moved Permanently',
    }));
  });

  it(`should return the correct object if inputValue is a string in the list ("I'm a teapot")`, () => {
    const result = getStatusCodeInfo("I'm a teapot");
    expect(result).toEqual(expect.objectContaining({
      statusCode: 418,
      title: "I'm a teapot",
    }));
  });

  it('should return the correct object if inputValue is a string in the list ("Too Many Requests")', () => {
    const result = getStatusCodeInfo("Too Many Requests");
    expect(result).toEqual(expect.objectContaining({
      statusCode: 429,
      title: "Too Many Requests",
    }));
  });

  it('should return the correct object if inputValue is a number in the list ("424")', () => {
    const result = getStatusCodeInfo("424");
    expect(result).toEqual(expect.objectContaining({
      statusCode: 424,
      title: "Failed Dependency",
    }));
  });

  it('should return the correct object if inputValue is a number in the list ("500")', () => {
    const result = getStatusCodeInfo("500");
    expect(result).toEqual(expect.objectContaining({
      statusCode: 500,
      title: "Internal Server Error",
    }));
  });

  it('should return the correct object if inputValue is a string in the list ("Gateway Timeout")', () => {
    const result = getStatusCodeInfo("Gateway Timeout");
    expect(result).toEqual(expect.objectContaining({
      statusCode: 504,
      title: "Gateway Timeout",
    }));
  });
})