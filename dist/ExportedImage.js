"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _image = _interopRequireDefault(require("next/image"));
var _react = _interopRequireWildcard(require("react"));
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var splitFilePath = function(param) {
    var filePath = param.filePath;
    var ref;
    var filenameWithExtension = ((ref = filePath.split("\\").pop()) === null || ref === void 0 ? void 0 : ref.split("/").pop()) || "";
    var filePathWithoutFilename = filePath.split(filenameWithExtension).shift();
    var fileExtension = filePath.split(".").pop();
    var filenameWithoutExtension = filenameWithExtension.substring(0, filenameWithExtension.lastIndexOf(".")) || filenameWithExtension;
    return {
        path: filePathWithoutFilename,
        filename: filenameWithoutExtension,
        extension: fileExtension || ""
    };
};
var generateImageURL = function(src, width, useWebp) {
    var ref = splitFilePath({
        filePath: src
    }), filename = ref.filename, path = ref.path, extension = ref.extension;
    if (![
        "JPG",
        "JPEG",
        "WEBP",
        "PNG",
        "AVIF"
    ].includes(extension.toUpperCase())) {
        return src;
    }
    var processedExtension = extension;
    if (useWebp && [
        "JPG",
        "JPEG",
        "PNG"
    ].includes(extension.toUpperCase())) {
        processedExtension = "WEBP";
    }
    var correctedPath = path;
    var lastChar = correctedPath === null || correctedPath === void 0 ? void 0 : correctedPath.substr(-1);
    if (lastChar != "/") {
        correctedPath = correctedPath + "/";
    }
    var isStaticImage = src.includes("_next/static/media");
    var generatedImageURL = "".concat(isStaticImage ? "" : correctedPath, "nextImageExportOptimizer/").concat(filename, "-opt-").concat(width, ".").concat(processedExtension.toUpperCase());
    if (generatedImageURL.charAt(0) !== "/") {
        generatedImageURL = "/" + generatedImageURL;
    }
    return generatedImageURL;
};
var optimizedLoader = function(param) {
    var src = param.src, width = param.width, useWebp = param.useWebp;
    var isStaticImage = typeof src === "object";
    var _src = isStaticImage ? src.src : src;
    return generateImageURL(_src, width, useWebp);
};
var fallbackLoader = function(param) {
    var src = param.src;
    var _src = typeof src === "object" ? src.src : src;
    return _src;
};
function ExportedImage(_param) {
    var src = _param.src, _priority = _param.priority, priority = _priority === void 0 ? false : _priority, loading = _param.loading, _lazyRoot = _param.lazyRoot, lazyRoot = _lazyRoot === void 0 ? null : _lazyRoot, _lazyBoundary = _param.lazyBoundary, lazyBoundary = _lazyBoundary === void 0 ? "200px" : _lazyBoundary, className = _param.className, quality = _param.quality, width = _param.width, height = _param.height, objectFit = _param.objectFit, objectPosition = _param.objectPosition, _useWebp = _param.useWebp, useWebp = _useWebp === void 0 ? true : _useWebp, onLoadingComplete = _param.onLoadingComplete, unoptimized = _param.unoptimized, _placeholder = _param.placeholder, placeholder = _placeholder === void 0 ? "blur" : _placeholder, blurDataURL = _param.blurDataURL, onError = _param.onError, rest = _objectWithoutProperties(_param, [
        "src",
        "priority",
        "loading",
        "lazyRoot",
        "lazyBoundary",
        "className",
        "quality",
        "width",
        "height",
        "objectFit",
        "objectPosition",
        "useWebp",
        "onLoadingComplete",
        "unoptimized",
        "placeholder",
        "blurDataURL",
        "onError"
    ]);
    var ref = _slicedToArray((0, _react.useState)(false), 2), imageError = ref[0], setImageError = ref[1];
    var automaticallyCalculatedBlurDataURL = (0, _react.useMemo)(function() {
        if (blurDataURL) {
            return blurDataURL;
        }
        var isStaticImage = typeof src === "object";
        var _src = isStaticImage ? src.src : src;
        if (unoptimized === true) {
            return _src;
        }
        return generateImageURL(_src, 10, useWebp);
    }, [
        blurDataURL,
        src,
        unoptimized
    ]);
    return _react.default.createElement(_image.default, _extends({}, rest, typeof src === "object" && src.width && {
        width: src.width
    }, typeof src === "object" && src.height && {
        height: src.height
    }, width && {
        width: width
    }, height && {
        height: height
    }, loading && {
        loading: loading
    }, lazyRoot && {
        lazyRoot: lazyRoot
    }, lazyBoundary && {
        lazyBoundary: lazyBoundary
    }, className && {
        className: className
    }, quality && {
        quality: quality
    }, objectFit && {
        objectFit: objectFit
    }, objectPosition && {
        objectPosition: objectPosition
    }, onLoadingComplete && {
        onLoadingComplete: onLoadingComplete
    }, placeholder && {
        placeholder: placeholder
    }, unoptimized && {
        unoptimized: unoptimized
    }, priority && {
        priority: priority
    }, imageError && {
        unoptimized: true
    }, {
        loader: imageError || unoptimized === true ? fallbackLoader : function(e) {
            return optimizedLoader({
                src: src,
                width: e.width,
                useWebp: useWebp
            });
        },
        blurDataURL: automaticallyCalculatedBlurDataURL,
        onError: function(error) {
            setImageError(true);
            onError && onError(error);
        },
        onLoadingComplete: function(result) {
            if (result.naturalWidth === 0) {
                setImageError(true);
            }
            onLoadingComplete && onLoadingComplete(result);
        },
        src: typeof src === "object" ? src.src : src
    }));
}
var _default = ExportedImage;


//# sourceMappingURL=ExportedImage.js.map