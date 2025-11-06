{ pkgs, ... }: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
    pkgs.typescript
    pkgs.npm-check-updates
    pkgs.nodePackages.nodemon
  ];
  env = {};
  idx = {
    extensions = [
      "dbaeumer.vscode-eslint"
    ];
    workspace = {
      onCreate = {
        npm-install = "npm install";
      };
      onStart = {
        dev-server = "npm run start";
      };
    };
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npm" "run" "start" "--" "--port" "$PORT"];
          manager = "web";
          env = {
            PORT = "$PORT";
          };
        };
      };
    };
  };
}
