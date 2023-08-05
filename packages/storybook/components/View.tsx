import { cva } from 'class-variance-authority'
import { ReactNode } from 'react'
import * as React from 'react'

export const View = ({
  prop = '',
  value = '',
  direction = 'row',
  justify = 'evenly',
  children,
}: {
  value: string
  direction?: 'row' | 'column'
  justify?: string
  children: ReactNode
  prop: string
}) => {
  const flexDirection = direction === 'column' ? 'column' : 'row'
  const justifyContent = justify === 'start' ? 'flex-start' : 'space-evenly'
  return (
    <div className="flex grow flex-col divide-y divide-gray-200 rounded-lg border shadow-sm">
      <div className="flex items-center space-x-2 bg-gray-100/75 p-2.5 text-gray-800">
        {prop}
        {value && <Badge>{value}</Badge>}
      </div>
      <div
        style={{ flexDirection, justifyContent }}
        className="bg-grid flex flex-wrap items-start justify-center gap-x-2 gap-y-2 bg-gray-50/25 p-2.5"
      >
        {children}
      </div>
    </div>
  )
}

export const EnhancedView = ({ prop = '', value = '', ...props }) => {
  const child = React.Children.only(props.children)
  const { children, ...rest } = child.props

  return (
    <div className="flex flex-col divide-y divide-gray-200 rounded-lg border shadow-sm">
      <div className="flex items-center space-x-2 bg-gray-100/75 p-2.5 text-gray-800">
        {prop}
        {value && <Badge>{value}</Badge>}
      </div>

      <div className="flex flex-wrap">
        <div className="m-2.5 flex min-w-[250px] flex-col divide-y divide-gray-200 rounded border text-sm ">
          <span className="p-1.5 font-medium">Props</span>
          {Object.keys(rest).map(prop => (
            <div key={prop} className="flex items-center space-x-0 p-1.5">
              <div className="text-gray-500">{prop}</div>
              {typeof rest[prop] === 'string' && (
                <div className="text-gray-800">
                  <Badge>{rest[prop]}</Badge>
                </div>
              )}
            </div>
          ))}
          {!Object.keys(rest).length && (
            <span className="p-1.5 text-gray-700">No properties selected</span>
          )}
        </div>

        <div className="bg-grid flex-1 bg-gray-50/50 p-2.5">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center space-x-0">
      <span>=&quot;</span>

      <div className="rounded border border-dashed border-red-200 bg-yellow-100 px-1 text-sm text-yellow-700">
        {children}
      </div>

      <span>&quot;</span>
    </div>
  )
}

export const ViewGroup = ({
  children,
  direction = 'column',
}: {
  children: ReactNode
  direction?: 'column' | 'row'
}) => {
  const viewClasses = cva(['flex', 'justify-evenly'], {
    variants: {
      direction: {
        row: ['flex-row', 'space-x-5'],
        column: ['flex-col', 'space-y-5'],
      },
    },
  })

  return <div className={viewClasses({ direction })}>{children}</div>
}
