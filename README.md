# repoint opreturn (internal usage)

Datapay's javascript library is the easiest way for me to handle op-return transactions. The goal is to deprecate this once I get it going in rust.

Likely repoint will interact with this via some script.

## Dev

Source files are copied into the image. No host dir is mounted to the container. Rebuild the docker image on each file modification you want ran. It's a bit akward but there is good reason for it.

### Testing


Re-build and test.

```
docker build -t repoint_opreturn:0.1.0 .
docker run --rm repoint_opreturn:0.1.0 npm test
```

`docker build` must be ran if you want to test any modifcations.
