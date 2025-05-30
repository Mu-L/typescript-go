//// [tests/cases/compiler/jsxFactoryQualifiedNameResolutionError.ts] ////

//// [test.tsx]
declare module JSX {
    interface IntrinsicElements {
        [s: string]: any;
    }
}

export class AppComponent {
    render(createElement) {
        return <div />;
    }
}

//// [test.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
class AppComponent {
    render(createElement) {
        return <div />;
    }
}
exports.AppComponent = AppComponent;
//# sourceMappingURL=test.js.map