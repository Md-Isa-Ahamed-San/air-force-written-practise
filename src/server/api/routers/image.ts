import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const imageRouter = createTRPCRouter({
  addToQuizSet: publicProcedure
    .input(
      z.object({
        quizSetId: z.string(),
        url: z.string().url(),
        publicId: z.string().optional(),
        order: z.number().int().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      let order = input.order;
      if (order === undefined) {
        const count = await ctx.db.image.count({
          where: { quizSetId: input.quizSetId },
        });
        order = count;
      }

      return ctx.db.image.create({
        data: {
          quizSetId: input.quizSetId,
          url: input.url,
          publicId: input.publicId,
          order,
        },
      });
    }),

  removeFromQuizSet: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.image.delete({
        where: { id: input.id },
      });
    }),

  reorder: publicProcedure
    .input(
      z.object({
        items: z.array(
          z.object({
            id: z.string(),
            order: z.number().int(),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.$transaction(
        input.items.map((item) =>
          ctx.db.image.update({
            where: { id: item.id },
            data: { order: item.order },
          })
        )
      );
    }),
});
