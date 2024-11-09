import { Console } from '@woowacourse/mission-utils';

const retry = async (action) => {
  try {
    return await action();
  } catch (error) {
    Console.print(error.message + '\n');
    await retry(action);
  }
};

export default retry;
