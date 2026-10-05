"use client"

import { Wallet } from "lucide-react"
import { useWeb3 } from "@/components/web3-provider"

type ConnectWalletGateProps = {
  feature: string
}

/** Shown when a page requires a connected wallet. */
export function ConnectWalletGate({ feature }: ConnectWalletGateProps) {
  const { connectWallet } = useWeb3()

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="text-center max-w-md px-4">
        <div
          className="mx-auto mb-4 h-12 w-12 rounded-xl flex items-center justify-center"
          style={{ background: "var(--green-dim)", border: "1px solid rgba(0,255,136,0.2)" }}
        >
          <Wallet className="h-5 w-5" style={{ color: "var(--green)" }} />
        </div>
        <h2 className="text-xl font-medium mb-2" style={{ color: "var(--text)" }}>
          Connect Your Wallet
        </h2>
        <p className="mb-6 text-sm" style={{ color: "var(--text-2)" }}>
          Please connect your wallet to access {feature} features.
        </p>
        <button type="button" onClick={connectWallet} className="connect-button inline-flex items-center gap-2">
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </button>
      </div>
    </div>
  )
}
