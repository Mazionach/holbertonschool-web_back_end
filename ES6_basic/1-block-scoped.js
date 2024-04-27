export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
  var dummy = task;
  var dummy2 = task2;

  if (trueOrFalse) {
    dummy = dummy2;
    dummy2 = dummy;
  }

  return [task, task2];
}
