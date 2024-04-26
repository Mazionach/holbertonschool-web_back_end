export default function taskBlock(trueOrFalse) {
  var a = trueOrFalse;
  var b = a;
  const task = false;
  const task2 = true;
  a = b;

  return [task, task2];
}
