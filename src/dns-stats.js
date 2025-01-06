const { expect } = require('chai');
const { getDNSStats } = require('../src/dns-stats.js');

describe('DNS stats', () => {
  it('should return domains stats', () => {
    const domains = [
      'code.yandex.ru',
      'music.yandex.ru',
      'yandex.ru'
    ];

    const expected = {
      '.ru': 3,
      '.ru.yandex': 3,
      '.ru.yandex.code': 1,
      '.ru.yandex.music': 1,
    };

    const result = getDNSStats(domains);
    expect(result).to.deep.equal(expected);
  });
});