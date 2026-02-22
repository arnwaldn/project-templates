# GitHub Gitignore Templates - Reference

> Source: github.com/github/gitignore
> 172.6K stars | 82.8K forks | CC0-1.0 | The official collection
> Last updated: 2026-02-22

---

## Quick Stats

| Metric | Value |
|--------|-------|
| GitHub Stars | 172,650 |
| Forks | 82,821 |
| License | CC0-1.0 (Public Domain) |
| Root Templates | 157 (languages & frameworks) |
| Global Templates | 73 (OS, editors, tools) |
| Community Templates | 32 (niche/specialized) |
| **Total** | **262 templates** |

---

## Usage

### Via GitHub UI
When creating a new repo on GitHub, select from the `.gitignore template` dropdown.

### Manual
```bash
# Download a specific template
curl -o .gitignore https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore

# Combine multiple (e.g. Node + macOS + JetBrains)
curl https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore > .gitignore
curl https://raw.githubusercontent.com/github/gitignore/main/Global/macOS.gitignore >> .gitignore
curl https://raw.githubusercontent.com/github/gitignore/main/Global/JetBrains.gitignore >> .gitignore
```

### Via gitignore.io
```bash
# Generate combined gitignore
npx gitignore node
# or visit: gitignore.io
```

---

## Root Templates (157) - Languages & Frameworks

### Web Development (Most Relevant)

| Template | Use For |
|----------|---------|
| **Node.gitignore** | Node.js, npm, pnpm, yarn projects |
| **Nextjs.gitignore** | Next.js apps |
| **Nestjs.gitignore** | NestJS backend |
| **Angular.gitignore** | Angular apps |
| **Python.gitignore** | Python, pip, venv, __pycache__ |
| **Go.gitignore** | Go binaries, vendor |
| **Rust.gitignore** | Cargo, target/ |
| **Java.gitignore** | Java, class files, JARs |
| **Kotlin.gitignore** | Kotlin/JVM projects |
| **Ruby.gitignore** | Ruby gems, bundler |
| **Rails.gitignore** | Ruby on Rails |
| **Dart.gitignore** | Dart language |
| **Flutter.gitignore** | Flutter mobile/web |
| **Swift.gitignore** | Swift/iOS development |
| **Dotnet.gitignore** | .NET/C# projects |
| **Sass.gitignore** | Sass/SCSS compiled output |

### Web Frameworks

| Template | Use For |
|----------|---------|
| **Laravel.gitignore** | Laravel PHP |
| **Symfony.gitignore** | Symfony PHP |
| **CakePHP.gitignore** | CakePHP |
| **CodeIgniter.gitignore** | CodeIgniter PHP |
| **Drupal.gitignore** | Drupal CMS |
| **WordPress.gitignore** | WordPress |
| **Joomla.gitignore** | Joomla CMS |
| **Django (Python.gitignore)** | Django (use Python template) |
| **Jekyll.gitignore** | Jekyll static sites |
| **Yeoman.gitignore** | Yeoman scaffolds |
| **Yii.gitignore** | Yii PHP framework |
| **Firebase.gitignore** | Firebase projects |
| **LangChain.gitignore** | LangChain AI apps |

### Systems Programming

| Template | Use For |
|----------|---------|
| **C.gitignore** | C language |
| **C++.gitignore** | C++ projects |
| **Objective-C.gitignore** | Objective-C/iOS |
| **CUDA.gitignore** | NVIDIA CUDA |
| **HIP.gitignore** | AMD HIP/ROCm |
| **Fortran.gitignore** | Fortran scientific |
| **D.gitignore** | D language |
| **Zig.gitignore** | Zig language |
| **Nim.gitignore** | Nim language |

### Functional & Academic

| Template | Use For |
|----------|---------|
| **Haskell.gitignore** | Haskell |
| **Elixir.gitignore** | Elixir/Phoenix |
| **Erlang.gitignore** | Erlang/OTP |
| **Scala.gitignore** | Scala/JVM |
| **Clojure.gitignore** | Clojure |
| **OCaml.gitignore** | OCaml |
| **Elm.gitignore** | Elm frontend |
| **PureScript.gitignore** | PureScript |
| **Gleam.gitignore** | Gleam (BEAM) |
| **Julia.gitignore** | Julia scientific |
| **R.gitignore** | R statistics |
| **Lua.gitignore** | Lua scripting |
| **Luau.gitignore** | Luau (Roblox) |
| **Coq.gitignore** | Coq proof assistant |
| **Agda.gitignore** | Agda dependent types |
| **Idris.gitignore** | Idris language |
| **Racket.gitignore** | Racket/Scheme |
| **Scheme.gitignore** | Scheme |
| **CommonLisp.gitignore** | Common Lisp |
| **Perl.gitignore** | Perl |
| **Raku.gitignore** | Raku (Perl 6) |
| **ReScript.gitignore** | ReScript (BuckleScript) |
| **Smalltalk.gitignore** | Smalltalk |

### Mobile & Game Dev

| Template | Use For |
|----------|---------|
| **Android.gitignore** | Android Studio |
| **Flutter.gitignore** | Flutter cross-platform |
| **Unity.gitignore** | Unity game engine |
| **UnrealEngine.gitignore** | Unreal Engine |
| **Godot.gitignore** | Godot engine |
| **FlaxEngine.gitignore** | Flax engine |
| **Processing.gitignore** | Processing sketches |

### DevOps & Infrastructure

| Template | Use For |
|----------|---------|
| **Terraform.gitignore** | Terraform IaC |
| **Packer.gitignore** | Packer images |
| **AppEngine.gitignore** | Google App Engine |
| **Maven.gitignore** | Maven Java builds |
| **Gradle.gitignore** | Gradle builds |
| **CMake.gitignore** | CMake projects |
| **Autotools.gitignore** | Autoconf/Automake |
| **SCons.gitignore** | SCons builds |

### E-commerce

| Template | Use For |
|----------|---------|
| **Magento.gitignore** | Magento |
| **OpenCart.gitignore** | OpenCart |
| **Prestashop.gitignore** | PrestaShop |

### Electronics & Hardware

| Template | Use For |
|----------|---------|
| **KiCad.gitignore** | KiCad PCB design |
| **Eagle.gitignore** | Eagle PCB |
| **LabVIEW.gitignore** | LabVIEW instruments |

### Blockchain

| Template | Use For |
|----------|---------|
| **Solidity-Remix.gitignore** | Solidity smart contracts |

### Other Notable

| Template | Use For |
|----------|---------|
| **TeX.gitignore** | LaTeX documents |
| **Salesforce.gitignore** | Salesforce/SFDC |
| **VBA.gitignore** | Visual Basic for Apps |
| **VisualStudio.gitignore** | Visual Studio C#/C++ |
| **Haxe.gitignore** | Haxe cross-platform |
| **IGORPro.gitignore** | IGOR Pro science |
| **Nix.gitignore** | Nix package manager |
| **ROS.gitignore** | Robot Operating System |
| **SketchUp.gitignore** | SketchUp 3D |
| **ForceDotCom.gitignore** | Force.com Salesforce |

---

## Global Templates (73) - OS, Editors, Tools

Meant to be combined with language templates. Add to `~/.gitignore_global`.

### Operating Systems

| Template | Ignores |
|----------|---------|
| **macOS.gitignore** | .DS_Store, .AppleDouble, ._* |
| **Windows.gitignore** | Thumbs.db, desktop.ini, $RECYCLE.BIN |
| **Linux.gitignore** | *~ backup files |

### IDEs & Editors

| Template | Ignores |
|----------|---------|
| **JetBrains.gitignore** | .idea/, *.iml (IntelliJ, WebStorm, PyCharm) |
| **VisualStudioCode.gitignore** | .vscode/, *.code-workspace |
| **Cursor.gitignore** | .cursor/ settings |
| **Vim.gitignore** | *.swp, *.swo, *~ |
| **Emacs.gitignore** | *~, \#*\#, .dir-locals.el |
| **SublimeText.gitignore** | *.sublime-workspace, *.sublime-project |
| **Eclipse.gitignore** | .classpath, .project, .settings/ |
| **NetBeans.gitignore** | nbproject/private/ |
| **Xcode.gitignore** | xcuserdata/, *.xcscmblueprint |
| **TextMate.gitignore** | *.tmproj, .tm_properties |
| **NotepadPP.gitignore** | nppBackup/ |
| **Kate.gitignore** | .kate-swp |

### Version Control & Tools

| Template | Ignores |
|----------|---------|
| **Mercurial.gitignore** | .hg* files |
| **SVN.gitignore** | .svn/ directories |
| **CVS.gitignore** | CVS/ directories |
| **Bazaar.gitignore** | .bzr/ |
| **Tags.gitignore** | TAGS, tags, GTAGS |
| **Patch.gitignore** | *.orig, *.rej |
| **Diff.gitignore** | *.patch, *.diff |

### Cloud & DevOps

| Template | Ignores |
|----------|---------|
| **Vagrant.gitignore** | .vagrant/ |
| **Ansible.gitignore** | *.retry files |
| **Cloud9.gitignore** | .c9/ workspace |
| **Dropbox.gitignore** | .dropbox, .dropbox.attr |
| **Syncthing.gitignore** | .stfolder, .stignore |

### Development Tools

| Template | Ignores |
|----------|---------|
| **VirtualEnv.gitignore** | .env, .venv, venv/ |
| **SBT.gitignore** | target/, .sbt/ |
| **PlatformIO.gitignore** | .pio/, .pioenvs/ |
| **GPG.gitignore** | secring.*, *.gpg |
| **Archives.gitignore** | *.zip, *.tar.gz, *.rar |
| **Images.gitignore** | *.jpg, *.png, *.gif (when not needed) |
| **Backup.gitignore** | *.bak, *.backup |
| **Redis.gitignore** | dump.rdb |
| **Lefthook.gitignore** | .lefthook-local/ |
| **mise.gitignore** | .mise.local.toml |
| **JEnv.gitignore** | .java-version |

---

## Community Templates (32) - Specialized

| Template | Use For |
|----------|---------|
| **Bazel.gitignore** | Bazel build system |
| **Hexo.gitignore** | Hexo blog framework |
| **Strapi.gitignore** | Strapi CMS |
| **Terragrunt.gitignore** | Terragrunt IaC |
| **OpenTofu.gitignore** | OpenTofu (Terraform fork) |
| **ROS2.gitignore** | ROS 2 robotics |
| **Puppet.gitignore** | Puppet configuration |
| **Splunk.gitignore** | Splunk configs |
| **SPFx.gitignore** | SharePoint Framework |
| **UiPath.gitignore** | UiPath automation |
| **AltiumDesigner.gitignore** | Altium PCB design |
| **MetaTrader5.gitignore** | MetaTrader trading |
| **Move.gitignore** | Move blockchain language |
| **OpenSSL.gitignore** | OpenSSL generated files |
| **Xilinx.gitignore** | Xilinx FPGA |
| And 17 more... | Various niche tools |

---

## Recommended Combos for Arnaud's Stack

### Next.js / React
```bash
# Nextjs + Node + macOS + JetBrains/VSCode
curl -s https://raw.githubusercontent.com/github/gitignore/main/Nextjs.gitignore > .gitignore
curl -s https://raw.githubusercontent.com/github/gitignore/main/Global/macOS.gitignore >> .gitignore
curl -s https://raw.githubusercontent.com/github/gitignore/main/Global/VisualStudioCode.gitignore >> .gitignore
```

### Python / Django / FastAPI
```bash
curl -s https://raw.githubusercontent.com/github/gitignore/main/Python.gitignore > .gitignore
curl -s https://raw.githubusercontent.com/github/gitignore/main/Global/VisualStudioCode.gitignore >> .gitignore
curl -s https://raw.githubusercontent.com/github/gitignore/main/Global/VirtualEnv.gitignore >> .gitignore
```

### Go
```bash
curl -s https://raw.githubusercontent.com/github/gitignore/main/Go.gitignore > .gitignore
curl -s https://raw.githubusercontent.com/github/gitignore/main/Global/VisualStudioCode.gitignore >> .gitignore
```

### Flutter / Dart
```bash
curl -s https://raw.githubusercontent.com/github/gitignore/main/Flutter.gitignore > .gitignore
curl -s https://raw.githubusercontent.com/github/gitignore/main/Global/macOS.gitignore >> .gitignore
```

### Rust
```bash
curl -s https://raw.githubusercontent.com/github/gitignore/main/Rust.gitignore > .gitignore
curl -s https://raw.githubusercontent.com/github/gitignore/main/Global/VisualStudioCode.gitignore >> .gitignore
```

### Unity Game
```bash
curl -s https://raw.githubusercontent.com/github/gitignore/main/Unity.gitignore > .gitignore
curl -s https://raw.githubusercontent.com/github/gitignore/main/Global/VisualStudioCode.gitignore >> .gitignore
```

### Global gitignore (~/.gitignore_global)
```bash
# Recommended global ignores for Windows + Git Bash
curl -s https://raw.githubusercontent.com/github/gitignore/main/Global/Windows.gitignore > ~/.gitignore_global
curl -s https://raw.githubusercontent.com/github/gitignore/main/Global/VisualStudioCode.gitignore >> ~/.gitignore_global
curl -s https://raw.githubusercontent.com/github/gitignore/main/Global/JetBrains.gitignore >> ~/.gitignore_global
curl -s https://raw.githubusercontent.com/github/gitignore/main/Global/Vim.gitignore >> ~/.gitignore_global
echo -e "\n# Common\n.env\n.env.local\n*.log\nnode_modules/" >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```

---

## Source

- Repository: github.com/github/gitignore
- Stars: 172,650 | Forks: 82,821
- License: CC0-1.0 (Public Domain)
- Total: 262 templates (157 root + 73 global + 32 community)
