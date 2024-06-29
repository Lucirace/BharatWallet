import express from "express";
import db from "@repo/db/client";
import prisma from "@repo/db/client";

const app = express();

app.use(express.json());

app.post("/hdfcWebhook", async (req, res) => {
  //TODO: Add zod validation here?
  //TODO: HDFC bank should ideally send us a secret so we know this is sent by them
  const paymentInformation: {
    token: string;
    userId: string;
    amount: string;
  } = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount,
  };
  // database check
  const getRecord = await db.onRampTransaction.findUnique({
    where: {
      token: paymentInformation.token,
    },
  });

  if (getRecord?.status == "Success") {
    return res.status(409).json({
      message: "Transaction already processed",
    });
  }

  if (getRecord?.amount != Number(paymentInformation.amount)) {
    return res.status(203).json({
      message: "Requested amount mismatch",
    });
  }

  try {
    await db.$transaction([
      db.balance.create({
        data: {
          amount: Number(paymentInformation.amount),
          userId: Number(paymentInformation.userId),
          locked: 0,
        },
      }),
      db.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);

    res.json({
      message: "Captured",
    });
  } catch (e) {
    console.error(e);
    res.status(411).json({
      message: "Error while processing webhook",
    });
  }
});
/*
      const txn = await tx.onRampTransaction
        .updateMany({
          where: {
            AND: [
              { token: paymentInformation.token },
              { userId: parseInt(paymentInformation.userId) },
              { amount: parseInt(paymentInformation.amount) },
              { status: "PENDING" },
            ],
          },
          data: {
            OnRampStatus: "SUCCESS",
          },
        })
        .catch((err: any) => {
          console.log(err);
          throw err;
        });

      // even when not matched on db the above call may not throw error but simply say txn.count = 0
      if (txn.count === 0) {
        throw new Error("Transaction Failed");
      }
    });

    return res.status(200).json({
      message: "Succesfully updated",
    });
  } catch (error) {
    // await prisma.onRampTransaction.update({
    //     where : {
    //         token : paymentInformation.token
    //     },
    //     data : {
    //         status : "FAILED"
    //     }
    // })
    res.status(411).json({
      message: "Error while processing the webhook",
    });
  }
});
/*
  try {
    await db.$transaction([
      db.balance.create({
        data: {
          amount: paymentInformation.amount,
          userId: Number(paymentInformation.userId),
          locked:0
          },
        },
      }),
      db.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);

    res.json({
      message: "Captured",
    });
  } catch (e) {
    console.error(e);
    res.status(411).json({
      message: "Error while processing webhook",
    });
  }
});
*/

app.listen(3004);
