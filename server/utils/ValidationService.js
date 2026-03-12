class ValidationService {
  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validateWalletAddress(address) {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  }

  static validateTokenConfig(config) {
    const required = [
      'name', 'symbol', 'totalSupply', 'presaleAmount',
      'presalePrice', 'softcap', 'hardcap', 'ownerAddress'
    ];

    const missing = required.filter(field => !config[field]);
    if (missing.length > 0) {
      throw new Error(`Missing required fields: ${missing.join(', ')}`);
    }

    if (!this.validateWalletAddress(config.ownerAddress)) {
      throw new Error('Invalid wallet address');
    }

    const presaleAmount = parseFloat(config.presaleAmount);
    const totalSupply = parseFloat(config.totalSupply);
    if (presaleAmount > totalSupply) {
      throw new Error('Presale amount cannot exceed total supply');
    }

    const softcap = parseFloat(config.softcap);
    const hardcap = parseFloat(config.hardcap);
    if (softcap > hardcap) {
      throw new Error('Softcap cannot exceed hardcap');
    }

    return true;
  }

  static sanitizeString(str) {
    return str.trim().replace(/[<>]/g, '');
  }

  static validateTokenSymbol(symbol) {
    return /^[A-Z0-9]{1,10}$/.test(symbol);
  }

  static validateAmount(amount) {
    const num = parseFloat(amount);
    return !isNaN(num) && num > 0;
  }

  static validatePercentage(percentage) {
    const num = parseFloat(percentage);
    return !isNaN(num) && num >= 0 && num <= 100;
  }

  static validateUnixTimestamp(timestamp) {
    return !isNaN(timestamp) && timestamp > Math.floor(Date.now() / 1000);
  }
}

module.exports = ValidationService;
