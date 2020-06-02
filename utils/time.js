export default {
  secondsToHours: (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds / 60) - hours * 60;
    const restOfSeconds = seconds % 60;

    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${restOfSeconds < 10 ? "0" + restOfSeconds : restOfSeconds}`;
  },
};
