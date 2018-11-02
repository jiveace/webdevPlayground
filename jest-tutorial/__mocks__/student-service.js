// __mocks__/student-service.js
export default {
  get: jest.fn(id => Promise.resolve(id))
};
