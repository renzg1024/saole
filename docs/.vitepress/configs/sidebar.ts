import type { DefaultTheme } from 'vitepress'
import frontEndBasic from './sidebar/frontEndBasic.json'
import mindGrowUp from './sidebar/mindGrowUp.json'
import workFunctional from './sidebar/workFunctional.json'

const sidebarDatas = {...frontEndBasic,...mindGrowUp,...workFunctional}
export const sidebar: DefaultTheme.Config['sidebar'] = sidebarDatas
