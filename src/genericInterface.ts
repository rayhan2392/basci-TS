{
  //generic type for interface
  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseDate: number;
    };
    smartWatch: T;
  }

  //now make a developer with this generic interface type
  const poorDeveloper: Developer<{
    brand: string;
    sleepTracker: boolean;
  }> = {
    name: "Shawn",
    computer: {
      brand: "HP",
      model: "HP elitebook 840 G6",
      releaseDate: 2018,
    },
    smartWatch: {
      brand: "chinese",
      sleepTracker: false,
    },
  };

  //now create another object

  const richDeveloper: Developer<{
    brand: string;
    model: string;
    sleepTracker: boolean;
    healthTracker: boolean;
  }> = {
    name: "Karim",
    computer: {
      brand: "Apple",
      model: "Mac Mini M4",
      releaseDate: 2024,
    },
    smartWatch: {
      brand: "Apple",
      model: "series 8",
      sleepTracker: true,
      healthTracker: true,
    },
  };

  //
}
