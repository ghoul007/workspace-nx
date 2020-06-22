module.exports = {
  name: 'customer-portal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/customer-portal',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
