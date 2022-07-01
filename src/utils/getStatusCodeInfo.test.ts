import { getStatusCodeInfo } from "./getStatusCodeInfo";

describe('getStatusCodeInfo', () => { 
  it('should return undefined if inputValue is empty', () => {
    const result = getStatusCodeInfo('-');
    expect(result).toBeUndefined();
  });
  it('should return undefined if inputValue is not a number and not found', () => {
    const result = getStatusCodeInfo('abc');
    expect(result).toBeUndefined();
  });
  it('should return undefined if inputValue is a number but not in the list', () => {
    const result = getStatusCodeInfo('999');
    expect(result).toBeUndefined();
  });
  it('should return the correct object if inputValue is a number in the list', () => {
    const result = getStatusCodeInfo('200');
    expect(result).toEqual(expect.objectContaining({
      statusCode: 200,
      title: 'OK',
    }));
  });
  it('should return the correct object if inputValue is a string in the list', () => {
    const result = getStatusCodeInfo('OK');
    expect(result).toEqual(expect.objectContaining({
      statusCode: 200,
      title: 'OK',
    }));
  });

  it('should return the correct object if inputValue is a string in the list', () => {
    const result = getStatusCodeInfo('Moved Permanently');
    expect(result).toEqual(expect.objectContaining({
      statusCode: 301,
      title: 'Moved Permanently',
    }));
  });
})