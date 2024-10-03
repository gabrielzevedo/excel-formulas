import * as Icons from 'untitledui-js-base'

import { Icon, IconProps } from '.'

const IconsList = () => {
  return (
    <div className="grid grid-cols-3 gap-2 lg:grid-cols-6">
      {Object.keys(Icons).map((value) => {
        const iconName = value as IconProps['icon']
        return (
          <div
            key={iconName}
            className="flex flex-col items-center gap-4 rounded border p-4 shadow-sm"
          >
            <div>
              <Icon icon={iconName} />
            </div>
            <span className="!text-xs">{iconName}</span>
          </div>
        )
      })}
    </div>
  )
}

IconsList.displayName = 'IconsList'

export { IconsList }
