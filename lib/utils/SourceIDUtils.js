'use strict';

class SourceIDUtils {
  static create(source, recordType, id) {
    return `${source}:${recordType}:${id}`;
  }

  static extract(sourceId) {
    if (!sourceId) {
      return;
    }
    const parts = sourceId.split(':');
    if (parts.length !== 3) {
      return;
    }
    return parts[2];
  }
}

module.exports = SourceIDUtils;
