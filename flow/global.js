declare class Process {
  env: { [key: string]: string };
}

declare var System: {
  import: (module: string) => Promise<Object>;
}

declare var module : {
  hot: {
    accept(path: string, callback: () => void): void;
  };
};

declare var __CLIENT__
