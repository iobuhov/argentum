function readPackage(pkg, context) {
    if (pkg) {
        switch (pkg.name) {
            case "@mendix/pluggable-widgets-tools": {
                delete pkg.dependencies["react-native"];
                break;
            }
        }
    }

    return pkg;
}

module.exports = {
    hooks: {
        readPackage
    }
};
