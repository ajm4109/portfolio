import {
  createClient,
  createPreviewSubscriptionHook,
  createImageUrlBuilder,
  createPortableTextComponent,
} from 'next-sanity';

const sanityConfig = {
  projectId: 'grlyqxfs',
  dataset: 'production',
  apiVersion: 'v2021-10-21',
  useCdn: false,
};

export const sanityClient = createClient(sanityConfig);

export const usePreviewSubscription =
  createPreviewSubscriptionHook(sanityConfig);

export const urlFor = (source) =>
  createImageUrlBuilder(sanityConfig).image(source);

export const portableText = createPortableTextComponent({
  ...sanityConfig,
  serializers: {},
});
