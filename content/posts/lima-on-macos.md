---
date: "2025-01-19T11:23:21+05:30"
draft: false
title: "Discovering Lima: My Go-To Open Source Tool for Virtualization on Apple Silicon"
tags: ["Lima", "Virtualization", "QEMU", "Emulation"]
---

I've always wanted to share the cool things I come across in my day job, but I've held back, fearing I wouldn't produce something worthwhile. However, I'm ready to change that and start writing about whatever I feel like, hoping that someday it will be worth reading.

Today, I want to talk about a piece of open-source software that I've been using on my Apple Silicon Mac for almost two years now **[Lima](https://github.com/lima-vm/lima)**.

Lima is a CLI application designed to promote containerD and nerdctl, but I've been using it as an alternative to VMware and VirtualBox. In my previous job, I worked on developing a monitoring agent responsible for APM, logs, and traces. Since it's a monitoring tool, it had to run on various different distributions and architectures. I used Lima to spin up all those virtual machines.

Spining up virtual machines with Lima is very simple once you install it

Need a VM with Fedora? Just execute the below command:

```bash
$ limactl start --name fedora template://fedora
```

Need a Docker environment without having to deal with Docker Desktop?

```bash
$ limactl start --name default template://docker
```

Want to list out all your instances?

```bash
$ limactl list

NAME       STATUS     SSH            VMTYPE    ARCH       CPUS    MEMORY    DISK      DIR
docker     Started    127.0.0.1:0    vz        aarch64    4       4GiB      100GiB    ~/.lima/docker
fedora     Stopped    127.0.0.1:0    vz        aarch64    4       4GiB      100GiB    ~/.lima/fedora
```

Want to get shell access to any instance?

```bash
$ limactl shell docker
```

And on top of all of this, Lima forwards all the ports that are exposed on the virtual machines automatically to the host machine, which makes it a breeze for any kind of Docker development.

I don't know how good of a project Lima is for promoting containerD, but I can vouch for one thing: this tool is the best virtualization and Docker solution out there for Apple Silicon Macs.
