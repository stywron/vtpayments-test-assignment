"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./modules/app.module");
let app;
exports.getApp = () => __awaiter(this, void 0, void 0, function* () {
    if (!app) {
        app = yield core_1.NestFactory.create(app_module_1.AppModule);
    }
    return app;
});
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield exports.getApp();
        yield app.listen(8000);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map