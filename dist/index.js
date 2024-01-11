'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

var instance = axios__default["default"].create({
    baseURL: "http://localhost:8083",
});
instance.interceptors.request.use(function (config) {
    return config;
}, function (err) {
    Promise.reject(err);
});
instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    return Promise.reject(error);
});
var RestAxios = (function () {
    function RestAxios() {
    }
    RestAxios.getInstance = function () {
        if (!RestAxios.instance) {
            RestAxios.instance = new RestAxios();
        }
        return RestAxios.instance;
    };
    RestAxios.prototype.get = function (path) {
        return instance.get(path);
    };
    RestAxios.prototype.post = function (path, entity) {
        return instance.post(path, entity);
    };
    RestAxios.prototype.delete = function (path) {
        return instance.delete(path);
    };
    RestAxios.prototype.put = function (path, entity) {
        return instance.put(path, entity);
    };
    return RestAxios;
}());

var restAxiosInstance = null;
function getRestAxiosPort() {
    if (!restAxiosInstance) {
        restAxiosInstance = RestAxios.getInstance();
    }
    return restAxiosInstance;
}

var CreateCustomerUseCase = (function () {
    function CreateCustomerUseCase() {
        this.restPort = getRestAxiosPort();
    }
    CreateCustomerUseCase.getInstance = function () {
        if (!CreateCustomerUseCase.instance) {
            CreateCustomerUseCase.instance = new CreateCustomerUseCase();
        }
        return CreateCustomerUseCase.instance;
    };
    CreateCustomerUseCase.prototype.createCustomer = function (customer) {
        return this.restPort.post("/v1/customer", customer);
    };
    return CreateCustomerUseCase;
}());

var DeleteCustomerUseCase = (function () {
    function DeleteCustomerUseCase() {
        this.restPort = getRestAxiosPort();
    }
    DeleteCustomerUseCase.getInstance = function () {
        if (!DeleteCustomerUseCase.instance) {
            DeleteCustomerUseCase.instance = new DeleteCustomerUseCase();
        }
        return DeleteCustomerUseCase.instance;
    };
    DeleteCustomerUseCase.prototype.deleteCustomer = function (id) {
        return this.restPort.delete("/v1/customer/".concat(id));
    };
    return DeleteCustomerUseCase;
}());

var GetCustomerUseCase = (function () {
    function GetCustomerUseCase() {
        this.restPort = getRestAxiosPort();
    }
    GetCustomerUseCase.getInstance = function () {
        if (!GetCustomerUseCase.instance) {
            GetCustomerUseCase.instance = new GetCustomerUseCase();
        }
        return GetCustomerUseCase.instance;
    };
    GetCustomerUseCase.prototype.getCustomer = function (id) {
        return this.restPort.get("/v1/customer/".concat(id));
    };
    return GetCustomerUseCase;
}());

var ListCustomerUseCase = (function () {
    function ListCustomerUseCase() {
        this.restPort = getRestAxiosPort();
    }
    ListCustomerUseCase.getInstance = function () {
        if (!ListCustomerUseCase.instance) {
            ListCustomerUseCase.instance = new ListCustomerUseCase();
        }
        return ListCustomerUseCase.instance;
    };
    ListCustomerUseCase.prototype.listCustomer = function () {
        return this.restPort.get("/v1/customer");
    };
    return ListCustomerUseCase;
}());

var UpdateCustomerUseCase = (function () {
    function UpdateCustomerUseCase() {
        this.restPort = getRestAxiosPort();
    }
    UpdateCustomerUseCase.getInstance = function () {
        if (!UpdateCustomerUseCase.instance) {
            UpdateCustomerUseCase.instance = new UpdateCustomerUseCase();
        }
        return UpdateCustomerUseCase.instance;
    };
    UpdateCustomerUseCase.prototype.updateCustomer = function (customer) {
        return this.restPort.put("/v1/customer", customer);
    };
    return UpdateCustomerUseCase;
}());

var createCustomerUseCaseInstance = null;
var listCustomerUseCaseInstance = null;
var updateCustomerUseCaseInstance = null;
var deleteCustomerUseCaseInstance = null;
var getCustomerUseCaseInstance = null;
function iCreateCustomerPort() {
    if (!createCustomerUseCaseInstance) {
        createCustomerUseCaseInstance = CreateCustomerUseCase.getInstance();
    }
    return createCustomerUseCaseInstance;
}
function iListCustomerPort() {
    if (!listCustomerUseCaseInstance) {
        listCustomerUseCaseInstance = ListCustomerUseCase.getInstance();
    }
    return listCustomerUseCaseInstance;
}
function iUpdateCustomerPort() {
    if (!updateCustomerUseCaseInstance) {
        updateCustomerUseCaseInstance = UpdateCustomerUseCase.getInstance();
    }
    return updateCustomerUseCaseInstance;
}
function iDeleteCustomerPort() {
    if (!deleteCustomerUseCaseInstance) {
        deleteCustomerUseCaseInstance = DeleteCustomerUseCase.getInstance();
    }
    return deleteCustomerUseCaseInstance;
}
function iGetCustomerPort() {
    if (!getCustomerUseCaseInstance) {
        getCustomerUseCaseInstance = GetCustomerUseCase.getInstance();
    }
    return getCustomerUseCaseInstance;
}

var createCustomer = function (customer) {
    var createCustomerPort = iCreateCustomerPort();
    return createCustomerPort.createCustomer(customer);
};
var listCustomer = function () {
    var listCustomerPort = iListCustomerPort();
    return listCustomerPort.listCustomer();
};
var updateCustomer = function (customer) {
    var updateCustomerPort = iUpdateCustomerPort();
    return updateCustomerPort.updateCustomer(customer);
};
var deleteCustomer = function (id) {
    var deleteCustomerPort = iDeleteCustomerPort();
    return deleteCustomerPort.deleteCustomer(id);
};
var getCustomer = function (id) {
    var getCustomerPort = iGetCustomerPort();
    return getCustomerPort.getCustomer(id);
};

exports.RestAxios = RestAxios;
exports.createCustomer = createCustomer;
exports.deleteCustomer = deleteCustomer;
exports.getCustomer = getCustomer;
exports.instance = instance;
exports.listCustomer = listCustomer;
exports.updateCustomer = updateCustomer;
//# sourceMappingURL=index.js.map
