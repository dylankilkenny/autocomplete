const completionSpec: Fig.Spec = {
  name: "abc",
  description: "",
  subcommands: [
    {
      icon: "📂",
      name: "Jump to Defender Docs",
      insertValue: "\b\bcd ~/github/defender-docs\n",
      description: "Go ~/github/defender-docs",
    },
    {
      icon: "📂",
      name: "Jump to Defender",
      insertValue: "\b\bcd ~/github/defender\n",
      description: "Go ~/github/defender",
    },
    {
      icon: "📂",
      name: "Jump to Defender Client",
      insertValue: "\b\bcd ~/github/defender-client\n",
      description: "Go ~/github/defender-client",
    },
    {
      icon: "👷",
      name: "Build Models",
      insertValue: "\b\bcd models; yarn build; cd ..; yarn style",
      description: "Build defender models",
    },
    {
      icon: "🚩",
      name: "Set Feature Flag",
      insertValue:
        "\b\byarn dev:run-in-stack api/src/scripts/set-feature-flag-tier.ts ",
      description: "Set a feature flag, args(tier, flag, boolean)",
    },
    {
      icon: "🔭",
      name: "Enable Blockwatcher",
      insertValue:
        "\b\byarn dev:run-in-stack api/src/scripts/enable-block-watcher.ts ",
      description: "Enable a blockwatcher, args(blockwatcherId)",
    },
    {
      icon: "🔍",
      name: "Inspect Tenant",
      insertValue:
        "\b\byarn admin:inspect-tenant {cursor} > inspections/inspect.md; code-insiders inspections/inspect.md",
      description: "Inspect a tenant",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for abc",
    },
  ],
  // Only uncomment if abc takes an argument
  // args: {}
};
export default completionSpec;
