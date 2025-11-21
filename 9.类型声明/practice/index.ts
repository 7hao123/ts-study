import lodash from 'lodash'

import axios from 'axios'

// 有些包下载量很高，却没有ts支持，比如lodash,你可以额外下载@types/lodash
// 里面都是d.ts文件
// 概括地说，类型声明文件就是一种不包括任何实际逻辑，
// 仅仅包含类型信息，并且无需导入操作，就能够被 TypeScript 自动加载的文件。
// 也就是说，如果定义了类型声明文件，即使你都不知道这个文件放在哪里了，
// 其中的类型信息也能够被加载，然后成为你开发时的类型提示来源。

window
// 为什么window也有类型提示呢？lib.xxx.d.ts是内置类型文件
// 使用tsc变异ts的时候，不仅仅产生js，还产生d.ts
