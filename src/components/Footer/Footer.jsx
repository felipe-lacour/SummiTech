import {navigation} from './navigation'

export const Footer = () => {
  return (
    <footer className="bg-negro">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-red-600 hover:text-red-700">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-red-500">
            Felipe lacour Hughes. SummiTech. CoderHouse, comision 39675.
          </p>
        </div>
      </div>
    </footer>
  )
}
