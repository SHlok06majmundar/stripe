export default function GeometricSection() {
  return (
    <section className="py-0 bg-white relative overflow-hidden">
      <div
        className="StripeSet StripeSet--TopRight StripeSet--layoutIntersecting StripeSet--alignCenter"
        data-js-controller="StripeSet"
        aria-hidden="true"
      >
        <div
          className="Stripe Stripe--accentNone Stripe--variantSolid Stripe--insetSmall Stripe--widthFull"
          aria-hidden="true"
          data-js-target-list="StripeSet.stripes"
        >
          <div className="absolute top-0 right-0 w-full h-16 bg-gradient-to-l from-cyan-400 via-blue-500 to-transparent transform -skew-y-1 opacity-70"></div>
        </div>

        <div
          className="Stripe Stripe--accentNone Stripe--variantSolid Stripe--insetNone Stripe--widthNormal"
          aria-hidden="true"
          data-js-target-list="StripeSet.stripes"
        >
          <div className="absolute top-4 right-16 w-3/4 h-12 bg-gradient-to-l from-blue-500 via-purple-600 to-transparent transform -skew-y-1 opacity-80"></div>
        </div>

        <div
          className="Stripe Stripe--accentNone Stripe--variantIntersection Stripe--insetSmall Stripe--widthFull Stripe--intersectionInsetNone Stripe--intersectionWidthNormal"
          aria-hidden="true"
          data-js-target-list="StripeSet.stripes"
        >
          <div className="Stripe__intersection" data-js-target="StripeSet.intersection">
            <div className="absolute top-8 right-32 w-1/2 h-8 bg-gradient-to-l from-purple-600 via-pink-500 to-transparent transform -skew-y-1 opacity-60"></div>
          </div>
        </div>

        <div
          className="Stripe Stripe--accentNone Stripe--variantSolid Stripe--insetSmall Stripe--widthFull"
          aria-hidden="true"
          data-js-target-list="StripeSet.stripes"
        >
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transform skew-y-1 opacity-70"></div>
        </div>

        <div
          className="Stripe Stripe--accentNone Stripe--variantSolid Stripe--insetNone Stripe--widthNormal"
          aria-hidden="true"
          data-js-target-list="StripeSet.stripes"
        >
          <div className="absolute bottom-4 left-16 w-3/4 h-12 bg-gradient-to-r from-blue-500 via-purple-600 to-transparent transform skew-y-1 opacity-80"></div>
        </div>

        <div
          className="Stripe Stripe--accentNone Stripe--variantIntersection Stripe--insetSmall Stripe--widthFull Stripe--intersectionInsetNone Stripe--intersectionWidthNormal"
          aria-hidden="true"
          data-js-target-list="StripeSet.stripes"
        >
          <div className="Stripe__intersection" data-js-target="StripeSet.intersection">
            <div className="absolute bottom-8 left-32 w-1/2 h-8 bg-gradient-to-r from-purple-600 via-pink-500 to-transparent transform skew-y-1 opacity-60"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 h-32"></div>
    </section>
  )
}
