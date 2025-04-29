// //1. Define your workout plan(array of objects)
// const workouts = [
// {exercise: 'Running', duration: 40, intensity: 'high'},
// {exercise: 'Yoga', duration: 25, intenity: 'low'},
// {exercise: 'Weights', duration: 15, intensity: 'high'},
// {exercise: 'Stretching', duration: 35, intensity: 'low'},
// {exercise: 'Cycling', duration: 50, intensity: 'medium'}
// ];
// console.log (workouts);

// //2. Function to calculate the total time(traditional function)
// function getTotalTime(workoutList) {
// return workoutList.reduce((total, workouts)=> total + workoutList.duration,0)
// }
// console.log('Total duration:',
// getTotalTime(workouts), 'minutes');